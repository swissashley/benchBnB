const FilterActions = {
    UPDATE_FILTER: "UPDATE_FILTER",
    updateFilter: (filter, value) => ({
      type: FilterActions.UPDATE_FILTER,
      filter,
      value
    })
  };
  //  window.updateFilter = FilterActions.updateFilter;
export default FilterActions;
