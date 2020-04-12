import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  RefinementList,
  Pagination,
  Highlight,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import './InstaSearch.css';
//algoliasearch
const searchClient = [
  {
    "objectID": 42,               // record identifier
    "title": "Breaking Bad",      // string attribute (searchable)
    "episodes": [                 // array of strings attribute (searchable)
      "Crazy Handful of Nothin'",
      "Gray Matter"
    ],
    "like_count": 978,            // integer attribute (ranking)
    "avg_rating": 1.23456,        // float attribute (ranking)
    "air_date": 1356846157,       // date as timestamp
    "featured": true,             // boolean attribute
    "actors": [                   // nested objects attribute (searchable)
      {
        "name": "Walter White",
        "portrayed_by": "Bryan Cranston"
      },
      {
        "name": "Skyler White",
        "portrayed_by": "Anna Gunn"
      }
    ],
    "media_category": "tv series",                 // string attribute for filtering
    "subject_category": ["drugs", "divorced dad"], // array of filters
    "_tags": "tv series, drugs"
  },
  {
    "objectID": 43,
    "title": "Mean Streets",
    "like_count": 1201,
    "avg_rating": 2.346,
    "featured": true,
    "director": "Martin Scorsese",
    "media_category": "film",
    "subject_category": ["brooklyn", "heist"],
    "_tags": "film, gangs"
  }
]; //algoliasearch('latency', '6be0576ff61c053d5f9a3225e2a90f76');

function InstaSearch() {
	return (
	<div>
		<header className="header">
		<h1 className="header-title">
			<a href="/">react-instantsearch-app</a>
		</h1>
		<p className="header-subtitle">
			using{' '}
			<a href="https://github.com/algolia/react-instantsearch">
			React InstantSearch
			</a>
		</p>
		</header>

		<div className="container">
			<InstantSearch searchClient={searchClient} indexName="instant_search">
				<div className="search-panel">
					{/*
					<div className="search-panel__filters">
						<RefinementList attribute="title" />
					</div>
					*/}

				<div className="search-panel__results">
					<SearchBox
						className="searchbox"
						translations={{
						placeholder: '',
						}}
						/>
					<Hits hitComponent={Hit} />

					<div className="pagination">
						<Pagination />
					</div>
				</div>	
				</div>	
			</InstantSearch>
		</div>	
	</div>	
	);
	}

function Hit(props) {
  return (
    <article>
      <h1>
        <Highlight attribute="title" hit={props.hit} />
      </h1>
      <p>
        <Highlight attribute="media_category" hit={props.hit} />
      </p>
    </article>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default InstaSearch;
