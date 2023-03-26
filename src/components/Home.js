import React from 'react';
import styled from "styled-components";
import Section from './Section';
import {selectCars} from "../features/car/carSlice";
import {useSelector} from "react-redux";


function Home() {
  return (
    <Container>
      <Wrap>
      <Section
        className="scroll-snap-align-start"
        modelName="Model S"
        modelBrief="Order Online for touchless delivery"
        leftbutton="Custom Order"
        rightbutton="View Inventory"
        source="model-s.jpg"
      />
      </Wrap>
      <Wrap>
      <Section
        className="scroll-snap-align-start"
        modelName="Model 3"
        modelBrief="Leasing starting at $349/mo"
        leftbutton="Custom Order"
        rightbutton="View Inventory"
        source="model-3.jpg"
      />
      </Wrap>
      <Wrap>
      <Section
        className="scroll-snap-align-start"
        modelName="Model X"
        modelBrief="Schedule a Demo Drive"
        leftbutton="Custom Order"
        rightbutton="View Inventory"
        source="model-x.jpg"
      />
      </Wrap>
      <Wrap>
      <Section
        className="scroll-snap-align-start"
        modelName="Model Y"
        modelBrief="Order Online for touchless delivery"
        leftbutton="Custom Order"
        rightbutton="View Inventory"
        source="model-y.jpg"
      />
      </Wrap>
      <Wrap>
      <Section
        className="scroll-snap-align-start"
        modelName="Solar Panels"
        modelBrief="Lowest cost solar panels in America"
        leftbutton="Order Now"
        rightbutton="Learn more"
        source="solar-panel.jpg"
      />
      </Wrap>
      <Wrap>
      <Section
        className="scroll-snap-align-start"
        modelName="Solar roof"
        modelBrief="Produce clean energy from your roof"
        leftbutton="Order now"
        rightbutton="Learn more"
        source="solar-roof.jpg"
      />
      </Wrap>
      <Wrap>
      <Section
        className="scroll-snap-align-start"
        modelName="Accessories"
        leftbutton="Shop Now"
        source="accessories.jpg"
      />
      </Wrap>
      
    </Container>
  )
}

export default Home

const Container = styled.div`
    height:100vh;
    scroll-snap-type:y mandatory;
    overflow-y: scroll;
    z-index:10;
    overflow-x:hidden;
`

const Wrap = styled.div`
  height: 100vh;
  scroll-snap-align: start;
`