import css from "./VoteStats.module.css";

interface VoteStatsProps {
    votes: {
        good: number;
        neutral: number;
        bad: number;
    };
    totalVotes: number;
    positiveRate: number;

}

export function VoteStats(voteStatsProps: VoteStatsProps) {
    return (
        <div className={css.container}>
            <p className={css.stat}>Good: <strong>{ voteStatsProps.votes.good }</strong></p>
            <p className={css.stat}>Neutral: <strong>{ voteStatsProps.votes.neutral }</strong></p>
            <p className={css.stat}>Bad: <strong>{ voteStatsProps.votes.bad }</strong></p>
            <p className={css.stat}>Total: <strong>{ voteStatsProps.totalVotes }</strong></p>
            <p className={css.stat}>Positive: <strong>{ voteStatsProps.positiveRate }%</strong></p>
        </div>
    );
}