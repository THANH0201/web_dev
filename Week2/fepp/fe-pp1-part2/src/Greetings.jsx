function Greetings(props) {
    const { lang, children } = props;
    const greetingMessage = () => {
        switch (lang) {
            case "en":
                return "Hello";
            case "fr":
                return "Bonjour";
            case "es":
                return "Hola";
            case "de":
                return "Hallo";
            case "fi":
                return "Moi";
            default:
                return "Hello";
        }
    };
    return (
        <div className="greeting-card"> {greetingMessage()} {children}
        </div>
    );
};

export default Greetings;