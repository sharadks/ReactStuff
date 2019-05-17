import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

class ArticleList extends React.PureComponent {
	componentDidMount() {
		this.props.fetchArticles('7');
	}
	render() {
		const articles = this.props.articleList;
		return (
			<div>
				{articles.articlesList.map((article) => (
					<ExpansionPanel>
						<ExpansionPanelSummary expandIcon={<ChevronRightIcon />}>
							<Typography>{<AccountCircleIcon />}</Typography>
							<Typography>{article.byline}</Typography>
							<Typography>{article.title}</Typography>
							<Typography className={{}}>
								{<CalendarTodayIcon />}
								{article.published_date}
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>{article.abstract}</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
				))}
			</div>
		);
	}
}

export default ArticleList;
