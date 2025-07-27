export function extractErrorMessage(err: any): string {
    if (!err?.error) return "Unknown error occurred";

    const errData = err.error;

    if (typeof errData === "string") return errData;

    if (typeof errData === "object") {
        for (const key in errData) {
            if (typeof errData[key] === "string") {
                return errData[key];
            }
        }
    }

    return "Unexpected error format";
}