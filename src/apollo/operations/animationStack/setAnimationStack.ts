import {ReactiveVar} from "@apollo/client";

export default function SetAnimationStack(animationVar: ReactiveVar<number>) {
    return () => {
        const currentValue = animationVar();
        animationVar(currentValue === 0 ? 1 : 0);
    }
}
