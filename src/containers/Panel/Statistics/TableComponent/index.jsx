import React from 'react'
import PropTypes from 'prop-types'

import { Translate, I18n } from 'react-redux-i18n'

import sortBy from 'lodash/sortBy'

import cx from 'classnames'

import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer'
import { Table, Column } from 'react-virtualized/dist/commonjs/Table'
import Moment from 'react-moment'

import Address from 'components/Address'

import styles from './styles.css'

const TableComponent = ({ tab, className, data }) => {
  const headerRenderer = (orientation = 'left') => params => {
    const { label } = params

    const classes = cx(styles['header-content'], {
      [styles[orientation]]: true,
    })

    return (
      <div className={ classes }>
        { label }
      </div>
    )
  }

  const classes = cx(styles.table, className)

  const sorted = sortBy(data, ({ date }) => -date)

  return (
    <AutoSizer disableHeight>
      { ({ width }) => (
        <Table
          className={ classes }
          headerClassName={ styles.header }
          gridClassName={ styles.content }
          rowClassName={ styles.row }

          width={ width }
          height={ 270 }

          headerHeight={ 40 }
          rowHeight={ 60 }
          rowCount={ sorted.length }

          rowGetter={ ({ index }) => sorted[index] }

          noRowsRenderer={ () => (
            <div styleName="empty-list">
              <Translate value="panel.statistics.noTransactions" />
            </div>
          ) }
        >
          <Column
            height={ 60 }
            width={ 90 }
            flexGrow={ 3 }
            label={ I18n.t(tab === 'outcoming' ? 'panel.statistics.to' : 'panel.statistics.from') }
            dataKey="address"
            headerRenderer={ headerRenderer() }
            cellRenderer={ ({ cellData }) => <Address address={ cellData } /> }
          />
          <Column
            height={ 60 }
            width={ 90 }
            flexGrow={ 1 }
            label={ I18n.t('common.amount') }
            dataKey="amount"
            styleName="right"
            headerRenderer={ headerRenderer('right') }
            cellRenderer={ ({ cellData }) => `${cellData} ETH` }
          />
          <Column
            height={ 60 }
            width={ 90 }
            flexGrow={ 1 }
            label={ I18n.t('common.level') }
            dataKey="level"
            styleName="right"
            headerRenderer={ headerRenderer('right') }
          />
          <Column
            height={ 60 }
            width={ 90 }
            flexGrow={ 1 }
            label={ I18n.t('common.date') }
            dataKey="date"
            styleName="right"
            headerRenderer={ headerRenderer('right') }
            cellRenderer={ ({ cellData }) => (
              <Moment format="DD/MM/YYYY HH:mm:ss" unix>{ cellData }</Moment>
            ) }
          />
        </Table>
      )}
    </AutoSizer>
  )
}

TableComponent.propTypes = {
  tab: PropTypes.string.isRequired,
  className: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape({
    address: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    level: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
  })).isRequired,
}

TableComponent.defaultProps = {
  className: '',
}

export default TableComponent
