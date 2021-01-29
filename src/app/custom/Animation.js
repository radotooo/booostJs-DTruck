import gsap from 'gsap';
import selectors from './selectors';

export default class Animation {
  constructor() {
    this._tl = gsap.timeline({ paused: true });
  }

  animation() {
    this._tl.to(selectors.list, {
      y: -50,
      duration: 0.5,
      id: 'listUp',
    });
    this._tl.to(selectors.list, {
      y: 0,
      duration: 0.5,
      id: 'listDown',
    });

    this._tl
      .to(selectors.listItems[0], {
        y: 100,
        duration: 0.5,
        opacity: 0,
        id: 'listItem0',
      })
      .to(
        selectors.listItems[1],
        {
          y: 150,
          duration: 0.5,
          opacity: 0,
          id: 'listItem1',
        },
        '<'
      )
      .to(
        selectors.listItems[2],
        {
          y: 200,
          duration: 0.5,
          opacity: 0,
          id: 'listItem2',
        },
        '<'
      );

    this._tl.to(selectors.truckBtnBg, {
      scale: 1.1,
      transformOrigin: 'center',
      id: 'truckBtnScaleUp',
    });

    this._tl.to(selectors.truckBtnBg, {
      scale: 1,
      transformOrigin: 'center',
      id: 'truckBtnScaleDown',
    });

    this._tl.to(selectors.containerParts, {
      opacity: 1,
      id: 'containerParts',
    });
    this._tl.to(selectors.container, { opacity: 1, id: 'container' });

    this._tl
      .to(selectors.backWheel1, { opacity: 1, id: 'backWheel1' })
      .to(selectors.backWheel2, { opacity: 1, id: 'backWheel2' }, '<')
      .to(selectors.backWheelBack1, { opacity: 1, id: 'backWheelBack1' }, '<')
      .to(selectors.backWheelBack2, { opacity: 1, id: 'backWheelBack2' }, '<');

    this._tl
      .to(selectors.frontGroup, { opacity: 1, id: 'frontGroup' })
      .to(selectors.frontWheel1, { opacity: 1, id: 'frontWheel1' }, '<')
      .to(selectors.frontWheel2, { opacity: 1, id: 'frontWheel2' }, '<')
      .to(
        selectors.frontWheelsBack,
        { opacity: 1, id: 'frontWheelsBack' },
        '<'
      );

    this._tl.to(selectors.truck, {
      x: 500,
      duration: 1.5,
      opacity: 0,
      ease: 'back.in(3)',
      id: 'truckMovement',
    });
    this._tl.to(selectors.shippedLabel, {
      opacity: 1,
      id: 'shippedLabel',
    });
  }
  play() {
    if (this._tl.paused()) {
      this._tl.play();
    } else {
      this._tl.restart();
    }
  }

  reverse() {
    this._tl.reverse();
  }
  pause() {
    this._tl.pause();
  }

  start() {
    this.animation();
    selectors.playBtn.addEventListener('click', () => this.play());
    selectors.reverseBtn.addEventListener('click', () => this.reverse());
    selectors.pauseBtn.addEventListener('click', () => this.pause());

    selectors.truckBtn.addEventListener('click', () => this.play());
  }
}
