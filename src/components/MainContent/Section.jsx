export default function Section(props) {
    const {title, children, id} = props;
    return (
        <section id={id}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}
