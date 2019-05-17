import apiService from '../../services/service';
import { API_KEY, API_URL } from '../../constant';

export const actionTypes = {
	FETCH_ARTICLES_START: 'FETCH_ARTICLES_START',
	FETCH_ARTICLES_SUCCESS: 'FETCH_ARTICLES_SUCCESS',
	FETCH_ARTICLES_FAILED: 'FETCH_ARTICLES_FAILED'
};

const fetchArticlesStart = () => ({
	type: actionTypes.FETCH_ARTICLES_START
});

const fetchArticlesSuccess = (articles) => ({
	type: actionTypes.FETCH_ARTICLES_SUCCESS,
	payload: articles
});

const fetchArticlesFailed = () => ({
	type: actionTypes.FETCH_ARTICLES_FAILED
});

export const fetchArticles = (days) => {
	return (dispatch) => {
		dispatch(fetchArticlesStart());
		apiService
			.get(`${API_URL}${days}.json?api-key=${API_KEY}`)
			.then((response) => {
				dispatch(fetchArticlesSuccess(response.data.results));
			})
			.catch((error) => dispatch(fetchArticlesFailed(error)));
	};
};
