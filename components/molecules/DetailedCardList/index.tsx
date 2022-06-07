import { FC } from 'react';
import { useWindowSize } from '../../../hooks';
import { DetailedCard } from '../../atoms';

interface Props {
  title?: string;
}

export const DetailedCardList: FC<Props> = ({ title }) => {
  const { width } = useWindowSize();

  const cardsToShow = width && (width - 40 + 16) / 166;

  const cards = [1,2,3,4,5,6,6,6,6,6,6,6,6,6,6,6,6,6];


  return (
    <section className='container-card' aria-label={title}>
      {
        cardsToShow && cards.slice(0, cardsToShow).map( (index) => (
          <DetailedCard key={index} />
        ))
      }
    </section>
  );
};
