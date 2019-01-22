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
  Layout,
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
  cap: require('../assets/cap.png'),
  dojo: require('../assets/dojo.jpg'),
  archi: require('../assets/Archi.png'),
  design: require('../assets/KataKafka.png'),
  java: require('../assets/java.png')
};

// Require CSS
require('normalize.css');

// Require arrow css
require('../assets/arrow.css');
// Import arrow component
import { Arrow } from '../assets/arrow';

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

const Logo = () => (
  <Image src={images.cap} width={64} style="position:absolute; top:10px; right:20px;" />
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
		  <Image src={images.cap} width={190} />
          <Heading textColor="tertiary" size={4}>
            Capgemini
          </Heading>
          <Heading textColor="secondary" size={4}>
            Arnaud Duforat
		  </Heading>
          <Heading textColor="tertiary" size={4}>
            20/01/2019
		  </Heading>
        </Slide>
		<Slide>
		  <Logo></Logo>
          <Heading size={2} textColor="tertiary" caps>Kata</Heading>
		  <Text>Learn how to play with code together.</Text>
        </Slide>
		<Slide bgColor="secondary">
		  <Logo></Logo>
          <Image src={images.dojo} width={600} />
		  <Text textColor="primary" textSize={12}>Hino Terumasa - Aikido Hombu - UKA Spring Course 2018 - Penny Maycock - CC BY 2.0</Text>
        </Slide>
		<Slide>
		  <Logo></Logo>
		  <List>
			<Heading size={6} textColor="tertiary" caps>In the dojo</Heading>
			<ListItem textColor="secondary">Success comes only after doing</ListItem>
			<ListItem textColor="secondary">Make mistakes</ListItem>
			<ListItem textColor="secondary">Experiment</ListItem>
			<ListItem textColor="secondary">Improve</ListItem>
			<ListItem textColor="secondary">No pressure</ListItem>
		  </List>
        </Slide>
		<Slide bgColor="secondary">
		  <Logo></Logo>
		  <Text textColor="primary">This kata arose from some discussions we’ve been having around microservices and messaging at Bordeaux. The problem domain proposed here is an imaginary delivery service "Deliverat". This case is a bit special because I will provide the services and we will only connect them.</Text>
        </Slide>
		<Slide>
		  <Logo></Logo>
		  <Heading size={2} textColor="tertiary" caps>Goal</Heading>
		  <Text>The goal of this kata is to practice with messaging concepts and play with Kafka.</Text>
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
        <Slide bgColor="secondary">
		  <Logo></Logo>
          <Heading size={2} textColor="primary" caps>Architecture</Heading>
          <Image src={images.archi} width={364} />
        </Slide>
		<Slide>
		  <Logo></Logo>
		  <Image src={images.design} width={600} />
		  <Text textSize={12} textColor="tertiary" caps>Architecture</Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
		    <Logo></Logo>
			<Heading size={6} textColor="primary" caps>Components</Heading>
			<Table>
			  <TableHeader>
				<TableRow>
				  <TableHeaderItem>Component</TableHeaderItem>
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
		  <Logo></Logo>
          <Heading size={6} textColor="secondary" caps>Testing</Heading>
          <List>
			<ListItem>Json Server</ListItem>
			<ListItem>Websocket Server</ListItem>
	      </List>
        </Slide>
		<Slide>
		  <Logo></Logo>
		  <Heading size={2} textColor="tertiary" caps>Kafka</Heading>
		</Slide>
		<Slide bgColor="secondary">
		  <Logo></Logo>
          <Heading size={2} textColor="primary" caps>Kafka</Heading>
		  <List>
			  <Text textColor="primary">Kafka is a <b>streaming platform</b>.</Text>
			  <Text textColor="primary">A distinct tool in your toolbox, like a relational database or a mail server.</Text>
			  <Text textColor="primary">A streaming platform encourages architectures that have an emphasis on <b>events</b> and <b>changes to data</b>.</Text>
		  </List>
        </Slide>
		<Slide>
		  <Logo></Logo>
		  <Heading size={2} textColor="tertiary" caps>Practice</Heading>
		</Slide>
		<Slide bgColor="secondary">
		  <Logo></Logo>
          <Heading size={2} textColor="primary" caps>Practice</Heading>
		  <Text textColor="primary">We will connect the Cartes and Commandes backend microservices.</Text>
		  <Table>
			  <TableBody>
				<TableRow>
				  <TableItem><Image src={images.java} width={129} /></TableItem>
				  <TableItem><Arrow></Arrow></TableItem>
				  <TableItem><Image src={images.java} width={129} /></TableItem>
				</TableRow>
			  </TableBody>
		  </Table>
        </Slide>
		<Slide bgColor="secondary">
		  <Logo></Logo>
          <Heading size={2} textColor="primary" caps>End of Day 1</Heading>
        </Slide>
		<Slide bgColor="secondary">
		  <Logo></Logo>
          <Heading size={2} textColor="primary" caps>End of Day 2</Heading>
        </Slide>
      </Deck>
    );
  }
}
