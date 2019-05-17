import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
	rowContainer: {
		width: '100%',
		display: 'flex',
		'flex-direction': 'row',
		'justify-content': 'space-between'
	},
	colContainer: {
		width: '100%',
		display: 'flex',
		'flex-direction': 'column'
	},
	icon: {
		flexBasis: '10%'
	},
	iconWidth: {
		height: '13px',
		width: '13px'
	},

	heading: {
		fontSize: theme.typography.pxToRem(15)
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(13),
		color: theme.palette.text.secondary
	}
});

class ArticleList extends React.PureComponent {
	componentDidMount() {
		this.props.fetchArticles('7');
	}

	state = {
		expanded: null
	};

	handleChange = (panel) => (event, expanded) => {
		this.setState({
			expanded: expanded ? panel : false
		});
	};

	render() {
		const articles = this.props.articleList;
		const { classes } = this.props;
		return (
			<div>
				{articles.articlesList.map((article) => (
					<ExpansionPanel>
						<ExpansionPanelSummary expandIcon={<ChevronRightIcon />}>
							<Typography className={classes.icon}>{<AccountCircleIcon />}</Typography>
							<div className={classes.colContainer}>
								<div>
									<Typography className={classes.heading}>{article.source}</Typography>
								</div>
								<div className={classes.rowContainer}>
									{' '}
									<Typography className={classes.secondaryHeading}>{article.byline}</Typography>
									<Typography className={classes.secondaryHeading}>
										<div>
											{<CalendarTodayIcon className={classes.iconWidth} />}
											<span> {article.published_date}</span>
										</div>
									</Typography>
								</div>
							</div>
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
export default withStyles(styles)(ArticleList);
