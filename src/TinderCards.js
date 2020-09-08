import React, { useState, useEffect } from "react"
import TinderCard from "react-tinder-card"
import database from "./firebase"
import "./TinderCards.css"

function TinderCards() {
    const [people, setPeople] = useState([]);

    // useEffect = Piece of code which runs based on a condition
    useEffect(() => {
        // this is where the code runs
        // if the [] is empty, this will run ONCE when the component loads
        // and NEVER again ORRRR when the variable PEOPLE changes!
        // Basically, whenever the people changes, the code will refire
        // So in the below code, we are getting the collection, the onSnapshot
        // attaches a listening to this collection, whenever it changes, we 
        // are then getting the documents of the collection by using 'map'
        // which goes through the documents, and gives up the documents data
        // i.e. the name and url in this case. setPeople is called to basically
        // new up our people array with the new people in the people collection
        // in our firebase database
        const unsubscribe = database.collection('people').onSnapshot(snapshot => (
            setPeople(snapshot.docs.map(doc => doc.data()))
        ));

        return () => {
            // cleanup our listeners
            unsubscribe();
        }
    }, [])

    // const people = []; same thing
    // people.push('chicken', 'mushroom') push to array in react, but don't do it this way
    // setPeople([...people, 'lamb']) the good way to use setting variables in react
    // the ... just keeps the initial list and appends to it when you add anything after that
    // it's called the spread operator

    /* Inline string interpolation and insert the string */
    /* Always give keys in react, always allows react to efficiently re-render a list */

    return (
        <div>
            <div className="tinderCards__cardContainer">
                {people.map(person => (
                    <TinderCard className="swipe" key={person.name} preventSwipe={['up', 'down']}>
                        <div style={{ backgroundImage: `url(${person.url})`}} className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards