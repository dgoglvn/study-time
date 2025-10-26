interface ChildProps {
    key: number;
    text: string;
    completed: boolean;
}
const TaskItem = ({key, text, completed}: ChildProps) => {
    // const taskRef = useRef<Task>(new Task());

    return (
        <>
            <li className={`relative overflow-hidden rounded-2xl border border-white/30 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-xl px-4 py-3 ${completed ? "line-through" : "decoration-none"}`} key={key} >
                <p className="text-[15px] leading-snug text-slate-900 dark:text-slate-100">
                    {text}
                </p>
                <p className={``}></p>
            </li>
        </>
    )
}

export default TaskItem;