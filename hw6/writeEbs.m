% FileName is :: writeEbs.m

% ���� + ��������ռ�
clc;clear;

% �������
    SubjectNo = 36;   % ������������ʵ���������
       ItemNo = 54;  
     RepeatNo = 1;   % �ظ�����Ϊ1��
     TrialsNo = ItemNo * RepeatNo; % �ظ������Ŀ����
       LineNo = TrialsNo;

% ���������ڵ��б��
Column_Question_id = 1; %
Column_Word_ID = 2; %
Column_Filler1_ID = 3; %
Column_Filler2_ID = 4; %
Column_CorrectA = 5; %
Column_Filler1_Pos = 6; %
Column_Filler2_Pos = 7; %
Column_Question_Type = 8; %

% ��ȡ��ǰ����·��
CWPath = fileparts(mfilename('fullpath'));
ebsFileName = 'WENS_hw6.ebs';
picFolderName = 'Images';
ebsPathName = sprintf('%s\\%s', CWPath, ebsFileName);
picPath = sprintf('%s\\%s',CWPath, picFolderName);    % �̼���������λ��

% �ڴ�֮ǰ����Ҫ����ֵ�����ַ�����,�������о�Ϊÿ���������п��ܵ��������Ϊ�ַ�����
String_Weight = {'1'};  % WeightĬ�ϵ�1����Ӧ�ַ���'1'
String_Nested = {' '};  % Nestedͨ��Ĭ���� �ո� 
String_Procedure = {'WordPicture'};  %ProcedureΪ 'WordPictureSelectionTaskProc'
String_Path = {'Images\\\\'}
String_WordID = {'apron';'ashtray';'bandage';'basket';'blanket';'bolster';'booze';'bouquet';'bunk';'cameo';'cane';'carafe';'chain';'chandelier';'choker';'cradle';'curtain';'cushion';'fan';'flask';'glove';'goblet';'hanger';'hanky';'helmet';'hook';'kerchief';'lamp';'mattress';'necklace';'necktie';'perfume';'pillow';'pipe';'pitcher';'polish';'quilt';'radio';'razor';'rug';'saber';'scissors';'scroll';'slipper';'spray';'statue';'suitcase';'tablet';'telephone';'vase';'wardrobe';'wheat';'willow';'worm'}; %���ʵ�Identity��Ϣ

String_CorrectResponse = {'{LEFTARROW}'; '{DOWNARROW}'; '{RIGHTARROW}'};%��ȷ��������Ϊ�������º����ҵļ�ͷ

% generate Subject Folders
for i = 1:SubjectNo
    % �����ļ���
    tmpSubPath = sprintf('%s\\Sub%02d', CWPath, i);
    if ~exist(tmpSubPath)
        mkdir(tmpSubPath);
    end
    
    % �����ļ���
    ebsPathName_dest = sprintf('%s\\%s', tmpSubPath, ebsFileName);
    copyfile(ebsPathName, ebsPathName_dest);
    picPath_dest = sprintf('%s\\%s', tmpSubPath, picFolderName);
    copyfile(picPath, picPath_dest);
    
    % ��ȡ�̼����� mrMatrix 
    wpMatrix = Generating_rMatrix(ItemNo);
    
    % ��ebs�ļ��������Blocklist�̼�����(�������ļ������)
    % ��ebs�ļ�
    ebsFileID = fopen(ebsPathName_dest,'a+'); %��Ŀ��ebs�ļ����������д��
    
        for iLine = 1:LineNo  %ѭ����һ��һ�е��������
            fprintf('%d\n', iLine)
            
            % �����ȷ����һ�е�ֵ��1����ô����ͼƬΪ���ʶ�Ӧ��ͼƬ...
            if wpMatrix(iLine, Column_CorrectA) == 1
                tmpLeftPicture =  String_WordID{wpMatrix(iLine, Column_Word_ID)};
            else
                if wpMatrix(iLine, Column_CorrectA) == 2
                     tmpCenterPicture =  String_WordID{wpMatrix(iLine, Column_Word_ID)};
                else
                     tmpRightPicture =  String_WordID{wpMatrix(iLine, Column_Word_ID)};
                end
            end
            
            % ���Filler1��һ�е�ֵ��1����ô����ͼƬΪFiller1��Ӧ��ͼƬ...
            if wpMatrix(iLine, Column_Filler1_Pos) == 1
                tmpLeftPicture =  String_WordID{wpMatrix(iLine, Column_Filler1_ID)};
            else
                if wpMatrix(iLine, Column_Filler1_Pos) == 2
                     tmpCenterPicture =  String_WordID{wpMatrix(iLine, Column_Filler1_ID)};
                else
                     tmpRightPicture =  String_WordID{wpMatrix(iLine, Column_Filler1_ID)};
                end
            end
            
             % ���Filler2��һ�е�ֵ��1����ô����ͼƬΪFiller2��Ӧ��ͼƬ...
            if wpMatrix(iLine, Column_Filler2_Pos) == 1
                tmpLeftPicture =  String_WordID{wpMatrix(iLine, Column_Filler2_ID)};
            else
                if wpMatrix(iLine, Column_Filler2_Pos) == 2
                     tmpCenterPicture =  String_WordID{wpMatrix(iLine, Column_Filler2_ID)};
                else
                     tmpRightPicture =  String_WordID{wpMatrix(iLine, Column_Filler2_ID)};
                end
            end
            
            % ��������Ҫ���ַ�����׼������д�뵽.ebs�ļ���
tmpStringLine = sprintf('%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s', String_Weight{1}, String_Nested{1}, String_Procedure{1}, String_Path{1}, String_WordID{wpMatrix(iLine, Column_Word_ID)}, tmpLeftPicture, tmpCenterPicture, tmpRightPicture, String_CorrectResponse{wpMatrix(iLine,Column_CorrectA)})
            
            if iLine < LineNo 
                fprintf(ebsFileID,'%s\n',tmpStringLine); %\nΪ����
            else
                fprintf(ebsFileID,'%s\\0',tmpStringLine); %���һ�м���\0
            end
        end
    
    fclose(ebsFileID); %�رգ�д�����
    
    
end


