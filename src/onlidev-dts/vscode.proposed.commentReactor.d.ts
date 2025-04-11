/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

declare module 'onlidev' {

	// @alexr00 https://github.com/microsoft/onlidev/issues/201131

	export interface CommentReaction {
		readonly reactors?: readonly CommentAuthorInformation[];
	}
}
