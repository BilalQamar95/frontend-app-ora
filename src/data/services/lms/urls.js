import React from 'react';
import { useParams } from 'react-router-dom';

import { StrictDict } from '@edx/react-unit-test-utils';
import { getConfig } from '@edx/frontend-platform';

import { useHasSubmitted } from 'data/redux/hooks';

import { stepNames, stepRoutes } from 'constants';

const useBaseUrl = () => {
  const { xblockId, courseId } = useParams();
  return `${getConfig().LMS_BASE_URL}/courses/${courseId}/xblock/${xblockId}/handler`;
};

export const useSaveDraftUrl = () => `${useBaseUrl()}/submission/draft`;
export const useSubmitUrl = () => `${useBaseUrl()}/submission/submit`;
export const useSubmitAssessmentUrl = () => `${useBaseUrl()}/assessment/submit`;
export const useORAConfigUrl = () => `${useBaseUrl()}/get_block_info`;
export const useGetPeerUrl = () => `${useBaseUrl()}/assessment/get_peer`;
export const useAddFileUrl = () => `${useBaseUrl()}/file/add`;
export const useUploadResponseUrl = () => `${useBaseUrl()}/file/upload_response`;
export const useDeleteFileUrl = () => `${useBaseUrl()}/file/delete`;

export const useViewUrl = () => {
  const { xblockId, courseId } = useParams();
  return ({ view }) => `${getConfig().BASE_URL}/${stepRoutes[view]}/${courseId}/${xblockId}`;
};

export const usePageDataUrl = (hasSubmitted) => {
  const baseUrl = useBaseUrl();
  const url = `${baseUrl}/get_learner_data/`;
  return React.useCallback((step) => {
    console.log({ step, stepNames, hasSubmitted });
    return ((step === stepNames.xblock) || hasSubmitted) ? url : `${url}${step}`;
  }, [hasSubmitted, url]);
};

export default StrictDict({
  useORAConfigUrl,
  usePageDataUrl,
});
