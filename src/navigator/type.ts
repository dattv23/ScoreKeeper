import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MatchProps } from '../components/Match';
import { TeamProps } from '../components/RegisterTeam';

export type MainStackParamList = {
    Keeper: undefined;
    Match: undefined;
    Register: { matchCurrent: MatchProps };
    Display: { teams: TeamProps[] };
    Search: undefined;
};

export type KeeperScreenProps = NativeStackScreenProps<MainStackParamList, 'Keeper'>;
export type MatchScreenProps = NativeStackScreenProps<MainStackParamList, 'Match'>;
export type RegisterScreenProps = NativeStackScreenProps<MainStackParamList, 'Register'>;
export type DisplayScreenProps = NativeStackScreenProps<MainStackParamList, 'Display'>;
export type SearchScreenProps = NativeStackScreenProps<MainStackParamList, 'Search'>;