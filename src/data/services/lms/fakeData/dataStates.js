import { StrictDict } from '@edx/react-unit-test-utils';

import { routeSteps } from 'constants';
import {
  defaultViewProgressKeys,
  progressKeys,
  stepConfigs,
  teamStates,
  viewKeys,
  stateStepConfigs,
} from 'constants/mockData';

import pageData from './pageData';

export const loadState = (opts) => {
  const {
    view,
  } = opts;
  const viewStep = routeSteps[view];
  const progressKey = opts.progressKey || defaultViewProgressKeys[view];
  const isTeam = teamStates.includes(progressKey) || (opts.isTeam === true);
  const stepConfig = stateStepConfigs[progressKey] || stepConfigs.all;

  const state = {
    progress: pageData.getProgressState({ progressKey, stepConfig, viewStep }),
    response: pageData.getResponseState({ progressKey, isTeam }),
    assessment: pageData.getAssessmentState({ progressKey, stepConfig }),
  };
  return state;
};
