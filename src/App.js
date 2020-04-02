import React from 'react';
import logo from './logo.svg';
import './App.css';
import articles from './articles';
import ArticleCard from './ArticleCard';
import ArticleItem from './ArticleItem';

class App extends React.Component {
  state = {
    articles: articles,
    theme: 'light',
    disabled: false
  };

  renderArticles = () => {
    return this.state.articles.map(article => {
      return (
        <ArticleCard
          key={article.id}
          title={article.title}
          url={article.url}
          urlToImage={article.urlToImage}
          description={article.description}
        />
      );
    });
  };
  handleClick = () => {
    let newDisabled;
    let newTheme;
    this.state.disabled ? (newDisabled = false) : (newDisabled = true);
    this.state.theme === 'light' ? (newTheme = 'dark') : (newTheme = 'light');
    this.setState({
      ...this.state.articles,
      disabled: newDisabled,
      theme: newTheme
    });
  };
  render() {
    return (
      <div className={this.state.theme}>
        {this.state.disabled ? (
          <button onClick={this.handleClick}>Switch to Dark Mode</button>
        ) : (
          <button onClick={this.handleClick}>Switch to List View</button>
        )}
        <div className='cards'>{this.renderArticles()}</div>
      </div>
    );
  }
}

export default App;
