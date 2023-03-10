import { css } from '@emotion/react'
import { useState } from 'react'
import { colorGrayFontDark, colorGrayPlaceholder } from '../../../styles/colors'
import { resetButtonStyles, resetInputStyles } from '../../../styles/utils'

export function SearchBar({ ...props }) {
  const [searchTerm, setSearchTerm] = useState('')

  function search() {
    if (searchTerm === '') {
      return
    }
    console.log(searchTerm)
  }

  return (
    <div css={styles.searchBar} {...props}>
      <input
        css={styles.searchInput}
        type="text"
        onChange={(event) => setSearchTerm(event.target.value)}
        onKeyDown={() => search()}
        placeholder="Enter Tweet URL"
      />
      <button css={styles.searchButton} onClick={() => search()}>
        <img
          srcSet="
          /icons/loupe-fat_128.png 4x,
          /icons/loupe-fat_64.png 2x,
          /icons/loupe-fat_32.png 1x,"
          src="/icons/loupe_32.png"
          alt=""
        />
      </button>
    </div>
  )
}

const styles = {
  searchBar: css`
    position: relative;
    z-index: 3;
    width: 360px;
    height: 100%;
    background-color: ${colorGrayFontDark};
    align-items: center;
    display: grid;
    padding: 0 30px 0 20px;
    grid-template-columns: 1fr 20px;
    grid-template-rows: 1fr;
  `,
  searchInput: css`
    ${resetInputStyles}
    height: 28px;
    margin-right: 20px;
    font-size: 18px;
    color: #fff;
    line-height: 18px;
    &::placeholder {
      color: ${colorGrayPlaceholder};
      opacity: 1;
    }
  `,
  searchButton: css`
    ${resetButtonStyles}
    width: 20px;
    img {
      width: 100%;
    }

    &:active {
      transform: scale(0.9);
    }
  `,
}
