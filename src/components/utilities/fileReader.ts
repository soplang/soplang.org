export default async function fileReader(path: string): Promise<string> {
  if (!path) throw new Error("FILE PATH IS INCORRECT OR EMPTY!");

  try {
    const response = await fetch(path);

    if (!response.ok) {
      throw new Error(`Failed to fetch file: ${response.status} ${response.statusText}`);
    }

    return await response.text();
  } catch (error) {
    console.error("Error reading file:", error);
    throw error;
  }
}
