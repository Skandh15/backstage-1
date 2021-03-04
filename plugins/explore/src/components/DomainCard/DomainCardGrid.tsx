/*
 * Copyright 2021 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { DomainEntity } from '@backstage/catalog-model';
import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { DomainCard } from '.';

type DomainCardGridProps = {
  entities: DomainEntity[];
};

const useStyles = makeStyles(theme => ({
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(22em, 1fr))',
    gridAutoRows: '1fr',
    gridGap: theme.spacing(2),
  },
}));

export const DomainCardGrid = ({ entities }: DomainCardGridProps) => {
  const classes = useStyles();
  return (
    <div className={classes.grid}>
      {entities.map((e, i) => (
        <DomainCard key={i} entity={e} />
      ))}
    </div>
  );
};
