import { useEffect, useState } from "react";
import {Image, FlatList} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./styles";
import logo from "../../assets/logo-nlw-esports.png"
import {Heading} from "../../components/Heading";
import {GameCard, GameCardProps} from "../../components/GameCard";
import {Background} from "../../components/Background";
import { useNavigation } from "@react-navigation/native";

export function Home() {

    const [game, setGame] = useState<GameCardProps[]>([])
    const navigation = useNavigation();
    function handleOpenGame({ id, title, bannerURL }: GameCardProps){
        navigation.navigate('game', { id, title, bannerURL });
    }

    useEffect(() => {
        fetch('http://192.168.0.15:3000/api/games')
            .then(response => response.json())
            .then(data => {setGame(data);})
    })
    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <Image
                    source={logo}
                    style={styles.logo}
                />
                <Heading
                    title="Encontre seu duo!"
                    subtitle="Selecione o game que deseja jogar..."
                />
                <FlatList
                    data={game}
                    keyExtractor={item => item.id}
                    renderItem={({item})=>(
                        <GameCard
                            data={item}
                            onPress={() => handleOpenGame(item)}
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.contentList}
                >

                </FlatList>
            </SafeAreaView>
        </Background>

    )
}