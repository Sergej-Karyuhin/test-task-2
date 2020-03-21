import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

function clear() {
  localStorage.clear();
  window.location.reload();
}

const Footer = () => (
  <div>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      Все
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      Активные
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      Неактивные
    </FilterLink>
    <button
      className={'button localStorage-button'}
      onClick={() => clear()}
    >Очистить<
    /button>
  </div>
)

export default Footer
