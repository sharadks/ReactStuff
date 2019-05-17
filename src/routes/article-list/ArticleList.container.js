import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ArticleListComponent from './ArticleList.component'
import { fetchArticles } from '../../redux/article-list/actions';

const mapStateToProps = (state) => ({
  articleList: state.articleList,
})
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ fetchArticles }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ArticleListComponent);
