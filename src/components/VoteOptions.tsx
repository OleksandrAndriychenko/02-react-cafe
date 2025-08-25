import css from "/Учеба/project_1/React/02-react-cafe/src/css/VoteOptions.module.css";
import type { VoteType } from "/Учеба/project_1/React/02-react-cafe/src/types/votes"

interface VoteOptionsProps {
    onVote: (type: VoteType) => void;
    onReset: () => void;
    canReset: boolean;
}

export function VoteOptions(voteOptionsProps: VoteOptionsProps) {
    return (
        <div className={css.container}>
            <button className={css.button} onClick={() => voteOptionsProps.onVote("good")}>Good</button>
            <button className={css.button} onClick={() => voteOptionsProps.onVote("neutral")}>Neutral</button>
            <button className={css.button} onClick={() => voteOptionsProps.onVote("bad")}>Bad</button>
            {voteOptionsProps.canReset && (<button className={`${css.button} ${css.reset}`} onClick={() => voteOptionsProps.onReset()}>Reset</button>)}
        </div>
    )
}
