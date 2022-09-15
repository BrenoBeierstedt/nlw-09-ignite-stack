import { SafeAreaView } from "react-native-safe-area-context"
import {FlatList, Image, TouchableOpacity, View, Text} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons"

import logoImg from "../../assets/logo-nlw-esports.png"
import {GameParams} from "../../@types/navigation";

import { styles } from "./styles";
import {THEME} from "../../theme";

import {Heading} from "../../components/Heading";
import {DuoCard, DuoCardProps} from "../../components/DuoCard";
import {Background} from "../../components/Background";
import {useEffect, useState} from "react";



export function Game(){
    const route = useRoute();
    const game = route.params as GameParams
    const navigation = useNavigation()
    function handleGoBack() {
        navigation.goBack();
    }

    const [adsList, setAdsList] = useState<DuoCardProps[]>([])

    useEffect(() => {
        fetch(`http://192.168.0.15:3000/api/games/${game.id}/ads`)
            .then(response => response.json())
            .then(data => {
                setAdsList(data)
            })
    },[])

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={handleGoBack}>
                        <Entypo
                            name="chevron-thin-left"
                            color={THEME.COLORS.CAPTION_300}
                            size={20}
                        />
                    </TouchableOpacity>
                    <Image
                        source={logoImg}
                        style={styles.logo}/>
                    <View style={styles.right}/>
                </View>
                <Image
                    source={{uri: game.bannerURL}}
                    style={styles.cover}
                    resizeMode="cover"
                />

                <Heading
                    title={game.title}
                    subtitle="Conecte-se e comece a jogar!"
                />
                <FlatList
                    data={adsList}
                    keyExtractor={item => item.id}
                    horizontal
                    style={styles.containerList}
                    contentContainerStyle={[adsList.length > 0 ? styles.contentList : styles.emptyListContent]}
                    showsHorizontalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <Text style={styles.emptyListText}> Não há duos listados ainda.</Text>
                    )}
                    renderItem={({item}) => (
                        <DuoCard
                            data={item}
                            onConnect={() => {}}
                        />
                    )}
                />
            </SafeAreaView>
        </Background>
    )
}