export default function createExcerptService(content: string): string {
  if (content.length >= 150) {
    return `${content.substring(0, 150)}...`;
  }

  return content;
}
