export enum OrderState {
    Draft = "draft",
    WaitingConfirmation = "waitingConfirmation",
    Confirmed = "confirmed",
    InProgress = "inProgress",
    Completed = "completed",
    Cancelled = "cancelled"
}

export const allOrderStates: OrderState[] = [
    OrderState.InProgress,
    OrderState.Confirmed,
    OrderState.WaitingConfirmation,
    OrderState.Draft,
    OrderState.Completed,
    OrderState.Cancelled
]

