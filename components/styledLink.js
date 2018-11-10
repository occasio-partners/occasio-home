import Link from 'next/link';
import styled from 'styled-components';
import { router } from 'next/router';

const StyledLink = styled.a.attrs({
  background: props => props.active ? 'white' : 'transparent'
})`
  display: inline-block;
  color: #303030;
  font: calc(5px + 1vw) menlo;
  font-weight: bold;
  text-align: center;
  padding: 2% 4% 2% 4%;
  text-decoration: none;
  position: relative;
  top: 50%;
  transform: translate(0%,-50%);
  background-color: ${props => props.background};
  &:hover {
    color: red; // <Thing> when hovered
  }
`;

const activeRoute = (href, path) => {
    console.log("href="+href + " path=" + path);
    console.log(href === path);
    return href === path;
  }

  const componentDidMount = () => {
    console.log("COMPONENTDIDMOUNT-SYTLEDLINK");
    //this.setState({
      //loaded: true
    //})
  }

export default ({ href, name, path }) => (
  <Link prefetch href={href} passHref>
    <StyledLink active={activeRoute(href, path)}>{name}</StyledLink>
  </Link>
)