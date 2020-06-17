class PlaysetNotFound extends Error {
  public constructor(public readonly id: string, message?: string) {
    super(message ?? `Playset ${id} not found`);
  }
}

export default PlaysetNotFound;
