import React, {useState, useEffect} from 'react';
import axios from 'axios'
import SingleCard from './SingleCard'
import {Container, Col, Row} from 'reactstrap'
import styled from 'styled-components'
import ButtonMaker from './ButtonMaker'

// const CustomContainer = styled(Container)`
//  display:flex;
//  justify-content: space-evenly;
//  flex-direction: column;
// `


const CardBuilder = () => {
    const [character,setCharacter] = useState([])
    const [page,setPage] = useState(1)
    const [next, setNext] = useState(null)
    useEffect(() => {
        axios.get(`https://swapi.co/api/people/?page=${page}`).then(res => {
            setCharacter(res.data.results)
            setNext(res.data.next)
            console.log(res.data)
        })
    },[page])
    return (
    <Container>
        <Row>
            {character.map((elem,i) => {
                return <SingleCard key = {i} name = {elem.name} height = {elem.height} weight = {elem.mass} eyeColor = {elem.eye_color} by = {elem.birth_year} vehicles = {elem.vehicles} starships = {elem.starships}/>
            })}
        </Row>
      <ButtonMaker next = {next} setNext = {setNext} page = {page} setPage = {setPage}/>
    </Container>
    );
};

export default CardBuilder;