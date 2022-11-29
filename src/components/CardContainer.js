import React, {useState, useEffect} from 'react'
import Card from './Card'
import baku from '../images/baku.jpg'
import bomu from '../images/bomu.jpg'
import doru from '../images/doru.jpg'
import gasha from '../images/gasha.jpg'
import hana from '../images/hana.jpg'
import jiki from '../images/jiki.jpg'
import kage from '../images/kage.jpg'
import kiro from '../images/kiro.jpg'
import mochi from '../images/mochi.jpg'
import moku from '../images/moku.jpg'
import sube from '../images/sube.jpg'
import yomi from '../images/yomi.jpg'

function CardContainer(props){
    const {handleGameLogic, score, highScore} = props;

    //fill this array of images with images in obj format later
    // formate {src, title, backgroundColor, backgroundStyle}
    let images = [
        {
            src: baku,
            title: 'Baku',
            backgroundColor: 'rgb(54 16 97)',
            borderStyle: '1px solid rgb(54 16 97)'
        },
        {
            src: bomu,
            title: 'Bomu',
            backgroundColor: 'rgb(54 4 53)',
            borderStyle: '1px solid rgb(54 4 53)'
        },
        {
            src: doru,
            title: 'Doru',
            backgroundColor: 'rgb(232 204 231)',
            borderStyle: '1px solid rgb(232 204 231)'
        },
        {
            src: gasha,
            title: 'Gasha',
            backgroundColor: 'rgb(89 68 148)',
            borderStyle: '1px solid rgb(89 68 148)'
        },
        {
            src: hana,
            title: 'Hana',
            backgroundColor: 'rgb(212 66 245)',
            borderStyle: '1px solid rgb(212 66 245)'
        },
        {
            src: jiki,
            title: 'Jiki',
            backgroundColor: 'rgb(80 74 82)',
            borderStyle: '1px solid rgb(80 74 82)'
        },
        {
            src: kage,
            title: 'Kage',
            backgroundColor: 'rgb(95 148 68)',
            borderStyle: '1px solid rgb(95 148 68)'
        },
        {
            src: kiro,
            title: 'Kiro',
            backgroundColor: 'rgb(189 23 97)',
            borderStyle: '1px solid rgb(189 23 97)'
        },
        {
            src: mochi,
            title: 'Mochi',
            backgroundColor: 'rgb(255 223 137)',
            borderStyle: '1px solid rgb(255 223 137)'
        },
        {
            src: moku,
            title: 'Moku',
            backgroundColor: 'rgb(122 121 122)',
            borderStyle: '1px solid rgb(122 121 122)'
        },
        {
            src: sube,
            title: 'Sube',
            backgroundColor: 'rgb(255 110 250)',
            borderStyle: '1px solid rgb(255 110 250)'
        },
        {
            src: yomi,
            title: 'Yomi',
            backgroundColor: 'rgb(196 119 18)',
            borderStyle: '1px solid rgb(196 119 18)'
        },
    ]

    const [cards, setNewCards] = useState(images)

    const shuffle = (newCards) => {
        for (let i = newCards.length - 1; i > 0; i--){
            let randomIdx = Math.floor(Math.random() * i);
            [newCards[randomIdx], newCards[i]] = [newCards[i], newCards[randomIdx]]
        }
    }

    useEffect (() => {
        const newCards = [...cards];
        shuffle(newCards);
        setNewCards(newCards);
    }, [score, highScore])

    return (
        <>
        {cards.map((card) => (
            <Card card={card} key={card.title} handleGameLogic={handleGameLogic} />
        ))}
        </>
    )
}

export default CardContainer