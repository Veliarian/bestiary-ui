import {definePropType} from "@bestiary-ui/utils";

export type BadgeType = "secondary" | "info" | "success" | "warn" | "danger" | "contrast";
export type BadgeSize = "small" | "large" | "xlarge";
export type BadgeForm = "circle";

export const badgeProps = {
    value: {
        type: String || Number,
        default: null
    },
    type: {
        type: definePropType<BadgeType>(String),
        default: null
    },
    size: {
        type: definePropType<BadgeSize>(String),
        default: null
    },
    form: {
        type: definePropType<BadgeForm>(String),
        default: null
    }
} as const