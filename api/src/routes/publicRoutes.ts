import { Router } from 'express';
import { PrismaClient } from "@prisma/client"
import {convertHourToMinutes} from "../utils/convertHourToMinutes";
import {convertMinutesToHour} from "../utils/convertMinutesToHour";
var routes = Router();
const prisma = new PrismaClient()

routes.get('/api/games', async (req, res) => {
    const games = await prisma.game.findMany({
        include:{
            _count: {
                select: {
                    ads: true
                }
            }
        }
    })
    return  res.json(games)
})

/* A route that will be called when the user accesses the url `/api/games/id/ads` */
routes.get('/api/games/:id/ads', async (req, res) => {
    const gameId = req.params.id
    const ads = await prisma.ad.findMany({
        select:{
            id: true,
            name: true,
            weekDays: true,
            useVoiceChannel: true,
            yearsPlaying: true,
            hourStart: true,
            hourEnd: true,

        },
        where:{
            gameId,
        },
        orderBy:{
            createdAt: 'desc'
        }
    })

    return res.json(ads.map (ad => {
        return {
            ...ad,
            weekDays: ad.weekDays.split(','),
            hourStart: convertMinutesToHour(ad.hourStart),
            hourEnd: convertMinutesToHour(ad.hourEnd)
        }
    }))
})

routes.get('/api/:id/discord', async (req, res) => {

    const discord = await prisma.ad.findUniqueOrThrow({
        select:{
            discord:true
        },
        where:{
            id: req.params.id
        },
    })

    return  res.json(discord)
})

routes.post('/api/games/:id/ads', async (req, res) => {


    const reqData = req.body

    const createdAd = await prisma.ad.create({
        data:{
            gameId: req.params.id,
            name: reqData.name,
            yearsPlaying: reqData.yearsPlaying,
            discord: reqData.discord,
            weekDays: reqData.weekDays.join(),
            hourStart: convertHourToMinutes(reqData.hourStart),
            hourEnd: convertHourToMinutes(reqData.hourEnd),
            useVoiceChannel: reqData.useVoiceChannel
        }
    })
    res.json(createdAd)
})





export default routes;
