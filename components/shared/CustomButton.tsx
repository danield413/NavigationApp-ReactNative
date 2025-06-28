import { Pressable, PressableProps, Text } from 'react-native';

interface Props extends PressableProps {
    children: string;
    color?: 'primary' | 'secondary' | 'tertiary';
    variant?: 'text-only' | 'contained';
    textColor?: 'primary' | 'secondary' | 'tertiary' | 'black' | 'white';
}

const CustomButton = ({ children, color , onPress, variant = 'contained', textColor = 'black', className }: Props) => {

    const btnColor = {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        tertiary: 'bg-tertiary',
    }[color!]

    const fontColor = {
        primary: 'text-primary',
        secondary: 'text-secondary',    
        tertiary: 'text-tertiary',
        black: 'text-black',
        white: 'text-white',
    }[textColor]

    if (variant === 'text-only') {
        return (
            <Pressable
                className={`p-3 ${btnColor} active:opacity-90 ${className}`}
                onPress={onPress}
            >
                <Text
                    className={`text-center font-works-black ${fontColor}`}
                >{children}</Text>
            </Pressable>
        )
    }

    return (
        <Pressable
            className={`p-3 rounded-lg ${btnColor} active:opacity-90 ${className}`}
            onPress={onPress}
        >
            <Text
                className={`text-center font-works-black ${fontColor}`}
            >{children}</Text>
        </Pressable>
    )

}

export default CustomButton