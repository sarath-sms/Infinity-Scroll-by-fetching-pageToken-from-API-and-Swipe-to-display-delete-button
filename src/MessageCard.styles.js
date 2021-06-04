import styled from 'styled-components';

export const Wrapper = styled.div`

.App {
  font-family: sans-serif;
  text-align: center;
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
      li {
        overflow: scroll;
        -webkit-overflow-scrolling: touch;
        scroll-snap-type: mandatory;
        scroll-snap-points-x: repeat(300px);
        scroll-snap-type: x mandatory;
        margin: 5px 15px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        &::-webkit-scrollbar {
            display: none;
        }
        &.dismiss-enter {
          opacity: 1;
        }
        &.dismiss-enter-active {
          opacity: 0;
          height: 0;
          transition: opacity 1000ms, height 1000ms;
        }
        .cardContainer {
          display: flex;
          flex-direction: column;
          padding: 10px;
          text-align: left;
          .authorAndYear {
            display: flex;
            align-items: center;
            .imgContainer {
              width: 14%;
              img {
                width: 100%;
                border-radius: 50%;
              }
            }
            .nameAndYear{
              flex: 1;
              padding-left: 2%;
              h3 {
                font-size: 0.9rem;
                line-height: 0;
                color: #050505;
              }
              h5 {
                color: #b0b0b0;
                margin: 0;
              }
            }
          }
          .messageContainer{
            p{
              color: #1b1b1b;
              font-size: 0.82rem;
              padding: 0.5rem;
            }
          }
        }
        .inner-wrap {
          width: 300%;
          display: flex;
          .inner-left {
            scroll-snap-align: start;
          }
          .inner-right {
            scroll-snap-align: end;
          }
          .inner {
            scroll-snap-align: center;
            flex-basis: 33.33%;
            background: white;
            border-radius: 4px;
            padding: 1em;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .inner-side {
            flex-grow: 1;
            display: flex;
            align-items: center;
          }
          .inner-side-right {
            justify-content: flex-end;
          }
          .inner-side-left {
            justify-content: flex-start;
          }
          .inner-actions button {
            color: white;
            background: #ff3500 !important;
          }
          .inner-gutter button {
            color: white;
            background: #ff3500 !important;
          }
        }
    }
  }
}
.deleteBtn{
  position: relative;
  border-radius: 8px;
  .deleteWord, svg{
    transform: translate(-50%, -50%) rotate(270deg);
    white-space: nowrap;
    top: 48%;
    left: 50%;
    position: absolute;
    text-align: center;
    font-size: 1rem;
  }
  svg{
    transform: translate(-50%,120%) rotate( 
      360deg
       );
          font-size: 1.5rem;
  }
}
@media only screen and (min-width: 648px){
	.App ul li .cardContainer {
    flex-direction: row;
    align-items: center;
    .authorAndYear {
      flex-direction: column;
      text-align: center;
      flex: 0.5;
      .imgContainer {
        width: 72px;
      }
      .nameAndYear{
        flex: 1;
        padding-left: 2%;
        h3{
          line-height: 1rem;
        }
      }
    }
    .messageContainer {
      flex: 1;
    }
  }
}
`;
