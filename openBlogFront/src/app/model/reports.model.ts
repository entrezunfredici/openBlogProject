// reports.reports.ts
export interface Reports {
    id: number;
    title: string;
    contentType: string;
    reportedElementId: number;
    status: string;
    userId: number;
}