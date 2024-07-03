import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/tap.svg').default,
    description: (
      <>
        Effortlessly navigate your way through our user-friendly website, where simplicity meets seamless functionality.
      </>
    ),
  },
  {
    title: 'Support',
    Svg: require('@site/static/img/help.svg').default,
    description: (
      <>
        Wikis empower communities by offering a collaborative, ever-evolving platform for shared knowledge and support.
      </>
    ),
  },
  {
    title: 'Latest Updates',
    Svg: require('@site/static/img/updated.svg').default,
    description: (
      <>
        This section highlights the most recent changes, significant additions, and updates across various topics, ensuring you stay informed about the latest trends, innovations, and breakthroughs.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
