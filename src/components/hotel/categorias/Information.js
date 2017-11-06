import React, { Component } from 'react';
import {
    Switch,
    Route,
    Link,
    NavLink
}from 'react-router-dom'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';


class Information extends Component {
    render() {
        return (
            <div >
               <div className="habitacion habitacion_info" >
                    <div className="img img_info">
                       <img  src="http://rossello-barcelona.eveniahotels.com/wp-content/uploads/2013/12/Family.jpg"/>
                    </div>
                    <div className="info_rooms">
                        <div className="info info_reserva">
                           <h3>
                              Habitacion doble
                           </h3>
                           <p>
                             S/50.soles
                           </p>
                           <p>
                              <NavLink exact to="/forms"  activeClassName="selected">Reservar</NavLink>
                           </p>
                        </div>
                   </div>
                </div>
                <div className="informance">
                  <p> asdasdasdasdasdasd</p>
                </div>
            </div>
        );
    }
}



const items = [
  {
    src: 'http://rossello-barcelona.eveniahotels.com/wp-content/uploads/2013/12/Family.jpg',

    caption:'Cama'
  },
  {
    src: 'http://www.ochoalacar.com/wp-content/uploads/2016/12/ba%C3%B1o-roca.jpeg',

    caption: 'Baño'
  },
  {
    src: 'https://st.hzcdn.com/simgs/3e01c10a005769a5_4-3462/modern-balcony.jpg',

    caption: 'Vista al mar'
  }
];

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          src={item.src}
        >
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <div >
         <div className="habitacion habitacion_info" >
              <div className="img img_info">
                <Carousel className="asd"
                  activeIndex={activeIndex}
                  next={this.next}
                  previous={this.previous}
                >
                  <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                  {slides}
                  <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                  <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
              </div>
              <div className="info_rooms">
                  <div className="info info_reserva">
                     <h3>
                        Habitacion doble
                     </h3>
                     <p>
                       S/50.soles
                     </p>
                     <p>
                        <NavLink exact to="/forms"  activeClassName="selected">Reservar</NavLink>
                     </p>
                  </div>
             </div>
             <div className="informance">
               <p> adsasdsdasdasdasd</p>
             </div>
          </div>
      </div>

    );
  }
}

export default Example;
// export default Information;
