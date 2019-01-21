// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Table,
  TableHeader,
  TableRow,
  TableHeaderItem,
  TableBody,
  TableItem,
  Text
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const images = {
  design: require('../assets/KataKafka.png')
};

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            Kata Kafka
          </Heading>
          <Heading textColor="tertiary" size={4}>
            Capgemini
          </Heading>
          <Heading textColor="tertiary" size={4}>
            Arnaud Duforat
		  </Heading>
          <Heading textColor="tertiary" size={4}>
            20/01/2018
		  </Heading>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={2} textColor="primary" caps>Architecture</Heading>
          <Heading size={4} textColor="secondary">Entrypoint</Heading>
          <Heading size={4} textColor="secondary">Agent</Heading>
          <Heading size={4} textColor="secondary">Redux</Heading>
          <Heading size={4} textColor="secondary">Components</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
			<List>
				  <Heading size={6} textColor="primary" caps>General functionalities</Heading>
				  <ListItem textColor="secondary">As a customer, see menu of a restaurant</ListItem>
				  <ListItem textColor="secondary">As a customer, add new order</ListItem>
				  <ListItem textColor="secondary">As a chef, add new menu</ListItem>
				  <ListItem textColor="secondary">As a chef, see orders for my restaurant</ListItem>
			</List>
        </Slide>
		<Slide>
          <Heading size={6} textColor="tertiary" caps>Components</Heading>
		  <Image src={images.design} width={600} />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
			<Heading size={6} textColor="primary" caps>Components</Heading>
			<Table>
			  <TableHeader>
				<TableRow>
				  <TableHeaderItem>Components</TableHeaderItem>
				  <TableHeaderItem>Aim</TableHeaderItem>
				</TableRow>
			  </TableHeader>
			  <TableBody>
				<TableRow>
				  <TableItem><Text textSize={28} textColor="white">React Commande</Text></TableItem>
				  <TableItem><Text textSize={28} textColor="white">Frontend used by customers</Text></TableItem>
				</TableRow>
				<TableRow>
				  <TableItem><Text textSize={28} textColor="white">React Cuisto</Text></TableItem>
				  <TableItem><Text textSize={28} textColor="white">Frontend used by chefs</Text></TableItem>
				</TableRow>
				<TableRow>
				  <TableItem><Text textSize={28} textColor="white">Webflux Cartes</Text></TableItem>
				  <TableItem><Text textSize={28} textColor="white">Microservice for cartes</Text></TableItem>
				</TableRow>
				<TableRow>
				  <TableItem><Text textSize={28} textColor="white">Webflux Commandes</Text></TableItem>
				  <TableItem><Text textSize={28} textColor="white">Microservice for orders</Text></TableItem>
				</TableRow>
			  </TableBody>
			</Table>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Testing</Heading>
          <List>
			<ListItem>Json Server</ListItem>
			<ListItem>Websocket Server</ListItem>
            <ListItem>Kafka</ListItem>
	      </List>
        </Slide>
      </Deck>
    );
  }
}
