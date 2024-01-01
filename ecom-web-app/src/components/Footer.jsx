import {
  EmailOutlined,
  Facebook,
  Instagram,
  LinkedIn,
  Phone,
  Pinterest,
} from "@material-ui/icons";
import styled from "styled-components";
import LOGO from "../logo/ecomitilogo.jpeg";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  cursor: pointer;
`;

const Description = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  /* ${mobile({ display: "none" })} */
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 100px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>
          <img src={LOGO} alt="Ecomiti Logo" />
        </Logo>
        <Description>
          There are many variations of Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Praesentium dolor necessitatibus dolores iure
          facilis voluptas quas ad perspiciatis vitae sunt aliquid incidunt
          maiores quos tempora, ut tenetur deserunt est aut!
        </Description>
        <SocialContainer>
          <SocialIcon color="E3305F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <LinkedIn />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>SmartWatches</ListItem>
          <ListItem>Men's Watches</ListItem>
          <ListItem>Mobile Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Help Center</ListItem>
          <ListItem>Terms & Conditions</ListItem>
          <ListItem>Contact Us</ListItem>
          <ListItem>Cookie Policy</ListItem>
        </List>
      </Center>
      <Right>
        <Title> REACH US </Title>
        <ContactItem>
          <EmailOutlined style={{ marginRight: "10px" }} />
          IF YOU HAVE ANY QUERIES EMAIL US: support@ecomiti.com
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          PHONE NO: +91-8129256737
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
