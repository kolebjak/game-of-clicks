import * as React from 'react';
import Leaderboard from './Leaderboard';
import PageContainer from "./components/PageContainer";
import Page from "./components/Page";
import Button, {ButtonSize} from "./components/Button";
import {FormEvent, useState} from "react";
import {useHistory} from 'react-router-dom';

const HomePage: React.FC = () => {
    const [teamName, setTeamName] = useState<string>();
    const history = useHistory();

    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        setTeamName(e.currentTarget.value)
    }

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        history.push(`/${teamName}`);
    }

    return (
        <PageContainer>
            <Page>
                <form onSubmit={onSubmit}>
                    <label htmlFor="teamNameInput">Enter your team name:</label><br/>
                    <input id="teamNameInput" onChange={onChange} required={true}/>
                    <Button size={ButtonSize.small} type="submit">click</Button>
                </form>
                <h2>Top 10 clickers</h2>
                <Leaderboard/>
            </Page>
        </PageContainer>
    );
}

export default HomePage;
