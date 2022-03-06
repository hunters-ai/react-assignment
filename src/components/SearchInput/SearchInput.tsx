import React, { ChangeEventHandler } from 'react'

import './SearchInput.scss'

interface ISearchInputProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const SearchInput = ({ onChange }: ISearchInputProps) => (
  <input className="c-SearchInput" placeholder="Search..." onChange={onChange} />
)
