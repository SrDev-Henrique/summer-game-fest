import fs from "node:fs";
import path from "node:path";

const EVENTOS_DIR = path.join(
  process.cwd(),
  "public",
  "assets",
  "images",
  "eventos",
);

const MONTH_NAMES: Record<string, string> = {
  jan: "Janeiro",
  feb: "Fevereiro",
  mar: "Março",
  apr: "Abril",
  may: "Maio",
  jun: "Junho",
  jul: "Julho",
  aug: "Agosto",
  sep: "Setembro",
  oct: "Outubro",
  nov: "Novembro",
  dec: "Dezembro",
};

/** 0-based month index for `Date` construction */
const MONTH_INDEX: Record<string, number> = {
  jan: 0,
  feb: 1,
  mar: 2,
  apr: 3,
  may: 4,
  jun: 5,
  jul: 6,
  aug: 7,
  sep: 8,
  oct: 9,
  nov: 10,
  dec: 11,
};

const SCHEDULE_EVENT_YEAR = 2026;

function parseEventDate(stem: string): string | null {
  const lower = stem.toLowerCase();

  const rangeSameMonth = lower.match(
    /(\d{1,2})-(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)-a-(\d{1,2})-\2\b/i,
  );
  if (rangeSameMonth) {
    const month = MONTH_NAMES[rangeSameMonth[2]];
    return `${month} ${rangeSameMonth[1]}–${rangeSameMonth[3]}`;
  }

  const single = lower.match(
    /\b(\d{1,2})-(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\b/i,
  );
  if (single) {
    return `${MONTH_NAMES[single[2]]} ${single[1]}`;
  }

  if (/\bgdc\s*26\b/i.test(stem) || /\bgdc26\b/i.test(stem)) {
    return "March 2026";
  }

  if (/\b2026\b/.test(stem)) {
    return "2026";
  }

  return null;
}

function titleCasePhrase(s: string): string {
  return s
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => {
      const u = w.toUpperCase();
      if (u === "GDC" || u === "CEDEC" || u === "LATAM" || u === "DEV")
        return u;
      return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
    })
    .join(" ");
}

function extractTitle(stem: string): string {
  let s = stem;
  s = s.replace(
    /\d{1,2}-(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)-a-\d{1,2}-\1/gi,
    " ",
  );
  s = s.replace(
    /\d{1,2}-(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/gi,
    " ",
  );
  s = s.replace(/\b20\d{2}\b/g, " ");
  s = s.replace(/_/g, " ").replace(/-/g, " ");
  s = s.replace(/\bgdc\s*26\b/gi, "GDC 2026");
  s = s.replace(/\bgdc26\b/gi, "GDC 2026");
  s = s.replace(/\s+/g, " ").trim();

  const cleaned = s
    .replace(/\blogo\b/gi, "")
    .replace(/\bred\b/gi, "")
    .replace(/\binforma\b/gi, "")
    .replace(/\bbanner\b/gi, "")
    .replace(/\s+/g, " ")
    .trim();

  const titled = titleCasePhrase(cleaned);
  return titled || stem;
}

export type ListedEventImage = {
  src: string;
  stem: string;
};

/**
 * Parses a calendar start date from the image filename stem for countdowns.
 * Range filenames use the first day; GDC stems use a fixed 2026 start date when
 * the filename does not include a day/month pattern.
 */
export function parseEventStartDate(stem: string): Date | null {
  const lower = stem.toLowerCase();

  const rangeSameMonth = lower.match(
    /(\d{1,2})-(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)-a-(\d{1,2})-\2\b/i,
  );
  if (rangeSameMonth) {
    const day = Number.parseInt(rangeSameMonth[1], 10);
    const monthKey = rangeSameMonth[2].toLowerCase();
    const month = MONTH_INDEX[monthKey];
    return new Date(SCHEDULE_EVENT_YEAR, month, day, 0, 0, 0, 0);
  }

  const single = lower.match(
    /\b(\d{1,2})-(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\b/i,
  );
  if (single) {
    const day = Number.parseInt(single[1], 10);
    const monthKey = single[2].toLowerCase();
    const month = MONTH_INDEX[monthKey];
    return new Date(SCHEDULE_EVENT_YEAR, month, day, 0, 0, 0, 0);
  }

  if (/\bgdc\s*26\b/i.test(stem) || /\bgdc26\b/i.test(stem)) {
    // GDC 2026: canonical week — adjust if the site later stores exact dates per asset
    return new Date(SCHEDULE_EVENT_YEAR, 2, 18, 0, 0, 0, 0);
  }

  return null;
}

export type ResolvedScheduleEvent = ListedEventImage & {
  meta: ReturnType<typeof metaForScheduleEvent>;
  startDate: Date | null;
};

export function resolveScheduleEventBySlug(
  slug: string,
): ResolvedScheduleEvent | null {
  const listed = listScheduleEventImages().find((e) => e.stem === slug);
  if (!listed) {
    return null;
  }
  return {
    ...listed,
    meta: metaForScheduleEvent(listed.stem),
    startDate: parseEventStartDate(listed.stem),
  };
}

export function listScheduleEventImages(): ListedEventImage[] {
  if (!fs.existsSync(EVENTOS_DIR)) {
    return [];
  }

  const files = fs
    .readdirSync(EVENTOS_DIR)
    .filter((f) => /\.(webp|png|jpe?g)$/i.test(f));
  files.sort((a, b) => a.localeCompare(b, "en"));

  return files.map((filename) => ({
    src: `/assets/images/eventos/${filename}`,
    stem: filename.replace(/\.(webp|png|jpe?g)$/i, ""),
  }));
}

export function metaForScheduleEvent(stem: string): {
  date: string;
  time: string;
  description: string;
  imageAlt: string;
} {
  const parsedDate = parseEventDate(stem);
  const title = extractTitle(stem);
  const date = parsedDate ?? "Date TBA";
  const imageAlt = title;

  return {
    date,
    time: "Horários variam — confira o programa oficial",
    description: `${imageAlt}: conferências, anúncios e networking. Visite o site do organizador para horários exatos e ingressos.`,
    imageAlt,
  };
}
