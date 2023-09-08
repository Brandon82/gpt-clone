import { Message } from '@components/Message';

interface WelcomeMessageProps {
    welcomeText: string;
}
  
export const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ welcomeText }) => {
    return (
        <div className="welcome-message">
            <Message source={'model'} text={welcomeText} />
        </div>
    );
}