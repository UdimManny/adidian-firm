import { ConditionPage } from './ConditionDetail';
import { conditionBySlug } from '../data/conditions';

const HomePhysiotherapy = () => <ConditionPage condition={conditionBySlug['home-physiotherapy']} />;

export default HomePhysiotherapy;
