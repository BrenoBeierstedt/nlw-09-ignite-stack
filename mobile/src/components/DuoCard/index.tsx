import { styles } from './styles'
import {TouchableOpacity, View, Text} from "react-native";
import {DuoInfo} from "../DuoInfo";
import {THEME} from "../../theme";
import { GameController } from "phosphor-react-native"

export interface DuoCardProps{
    id: string;
    name: string;
    weekDays: string[];
    hourStart: string;
    hourEnd: string;
    useVoiceChannel: boolean;
    yearsPlaying: number;

}

interface props{
    data: DuoCardProps
    onConnect: () => void;
}

export function DuoCard({ data, onConnect }: props) {



    return (
        <View style={styles.container}>
            <DuoInfo
                label="Nome"
                value={`${data.name}`}
            />
            <DuoInfo
                label="Tempo de jogo"
                value={`${data.yearsPlaying} anos`}
            />
            <DuoInfo
                label="Disponibilidade"
                value={`${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd}`}
            />
            <DuoInfo
                label="Chamada de audio?"
                value={data.useVoiceChannel ? 'Sim': 'Não'}
                colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT }
            />
            <TouchableOpacity
                style={styles.button}
                onPress={onConnect}
            >
                <GameController
                    color={THEME.COLORS.TEXT}
                />
                <Text style={styles.buttonTitle}>
                    Conectar
                </Text>
            </TouchableOpacity>

        </View>
    )
}